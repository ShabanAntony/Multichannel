defmodule Multistream.OnlineStreamersListener do
  require Logger

  defstruct [
    :butterfly,
    :sclkoma,
    :watson,
    :w33,
    :gorgc,
    :yatoro,
    :dendi,
    :ramzes666,
    :sumail,
    :arteezy,
    :iceiceice,
    :qojqva,
    :iltw,
    :attacker,
    :sketcher_8,
    :nine_class,
    :miragedotess
  ]

  def get_steamer_name(steam_id) do
    players = %Multistream.OnlineStreamersListener{
      butterfly: 1_044_002_267,
      sclkoma: 165_671_428,
      watson: 171_262_902,
      w33: 86_700_461,
      gorgc: 56_939_869,
      yatoro: 321_580_662,
      dendi: 70_388_657,
      ramzes666: 132_851_371,
      sumail: 111_620_041,
      arteezy: 86_745_912,
      iceiceice: 84_772_440,
      qojqva: 86_738_694,
      iltw: 113_995_822,
      attacker: 118_305_301,
      sketcher_8: 173_480_718,
      nine_class: 164_199_202,
      miragedotess: 140_251_702
    }

    case Map.get(players, steam_id) do
      nil ->
        Logger.info("No streamer found with the given steam_id: #{steam_id}")
        nil

      streamer_name ->
        Logger.info("Streamer name is: #{streamer_name}")
        streamer_name
    end
  end

  def slice(struct, range) do
    Enum.slice(struct, range)
  end
end
