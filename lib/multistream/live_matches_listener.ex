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
    :miragedotess
  ]

  def get_twitch_url(streamer_name) do
    # Получаем список игроков из ответа API
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
      nine_class: "https://www.twitch.tv/9class",
      miragedotess: "https://www.twitch.tv/miragedotess"
    }

    # Получаем имя игрока из списка игроков
    streamer_name = Map.get(streamers, streamer_name)

    # Получаем ссылку на канал Twitch для указанного игрока
    twitch_url = Multistream.LiveMatchesListener.get_twitch_url(streamer_name)

    Logger.info("Twitch URL: #{twitch_url}")

    twitch_url
  end
end
