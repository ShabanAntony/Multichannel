defmodule Multistream.API do
  require Logger

  def get_online_games do
    Logger.info("Starting function get_online_games")
  
    response = HTTPoison.get("https://api.opendota.com/api/live")
  
    case response do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        games = Poison.decode!(body)
        # Logger.info("Received games: #{inspect(games)}")
        online_streamers = Enum.flat_map(games, &get_online_streamers/1)
        # Logger.info("Online streamers: #{inspect(online_streamers)}")
        {:ok, online_streamers}
  
      {:ok, %HTTPoison.Response{status_code: status_code}} ->
        Logger.error("Error: #{status_code}")
        {:error, "Error: #{status_code}"}
  
      {:error, %HTTPoison.Error{reason: reason}} ->
        Logger.error("Error HTTP: #{reason}")
        {:error, "Error HTTP: #{reason}"}
    end
  end

  defp get_online_streamers(game) do
    players_object = game["players"]
    # Logger.info("Received players info: #{inspect(players_object)}")

    # getting steam_id from each players_object
    steam_ids = Enum.map(players_object, fn player -> player["account_id"] end)
    Logger.info("Received list of steam Ids: #{inspect(steam_ids)}")

    # sending each steam_id to get_steamer_name/1 function
    Enum.reduce(steam_ids, [], fn steam_id, acc ->
      streamer_name =
        Multistream.OnlineStreamersListener.get_steamer_name(steam_id)

      case Multistream.LiveMatchesListener.get_twitch_url(streamer_name) do
        nil ->
          acc

        url ->
          Logger.info("Found Twitch URL for streamer: #{streamer_name}, URL: #{url}")
          [url | acc]
      end
    end)
  end

  def main do
    Logger.info("Starting to get online games")
    case get_online_games() do
      {:ok, online_streamers} ->
        Enum.each(online_streamers, fn url ->
          Logger.info("Twitch URL: #{url}")
        end)

      {:error, error} ->
        Logger.error("Error: #{error}")
    end
  end
end
