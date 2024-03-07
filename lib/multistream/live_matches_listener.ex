defmodule Multistream.LiveMatchesListener do
  require Logger

  defstruct [
    :nix,
    :cartixfuture,
    :gorgc,
    :yatoro,
    :dendi,
    :abed,
    :miracle,
    :sumail,
    :arteezy,
    :iceiceice,
    :ramzes666,
    :qojqva,
    :aui_2000,
    :butterfly,
    :sclkoma,
    :watson,
    :w33,
    :iltw,
    :attacker,
    :sketcher_8,
    :nine_class,
    :miragedotess,
    :boxi,
    :lodine,
    :canceldota,
    :kataomi
  ]

  def get_twitch_url(streamer_name) do
    streamers = %Multistream.LiveMatchesListener{
      nix: "https://www.twitch.tv/nix",
      cartixfuture: "https://www.twitch.tv/cartixfuture",
      gorgc: "https://www.twitch.tv/gorgc",
      yatoro: "https://www.twitch.tv/ytraddan",
      dendi: "https://www.twitch.tv/dendi",
      abed: "https://www.twitch.tv/abed",
      miracle: "https://www.twitch.tv/miracle",
      sumail: "https://www.twitch.tv/sumail",
      arteezy: "https://www.twitch.tv/arteezy",
      iceiceice: "https://www.twitch.tv/iceiceice",
      ramzes666: "https://www.twitch.tv/ramzes666",
      qojqva: "https://www.twitch.tv/qojqva",
      aui_2000: "https://www.twitch.tv/aui_2000",
      butterfly: "https://www.twitch.tv/satanic_dota2",
      sclkoma: "https://www.twitch.tv/sclkoma",
      watson: "https://www.twitch.tv/watsondoto",
      w33: "https://www.twitch.tv/w33haa",
      iltw: "https://www.twitch.tv/iltw1",
      attacker: "https://www.twitch.tv/attacker",
      sketcher_8: "https://www.twitch.tv/sketcher_8",
      nine_class: "https://www.twitch.tv/nine_class",
      miragedotess: "https://www.twitch.tv/miragedotess",
      boxi: "https://www.twitch.tv/boxi98",
      lodine: "https://www.twitch.tv/lodine",
      canceldota: "https://www.twitch.tv/canceldota",
      kataomi: "https://www.twitch.tv/kataomi_"
    }

    case Map.fetch(streamers, streamer_name) do
      {:ok, url} ->
        # Logger.info("Streamer name is: #{streamer_name}, URL: #{url}")
        url

      :error ->
        # Logger.info("No Twitch URL found for streamer: #{streamer_name}")
        nil
    end
  end

  def slice(struct, range) do
    Enum.slice(struct, range)
  end
end
