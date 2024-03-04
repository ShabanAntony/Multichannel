# defmodule Multistream.OnlineGamesServer do
#   use GenServer

#   def start_link(_) do
#     GenServer.start_link(__MODULE__, %{}, name: __MODULE__)
#   end

#   def init(state) do
#     # Планируем работу первый раз
#     schedule_work()
#     {:ok, state}
#   end

#   def handle_info(:work, state) do
#     # Получаем данные с API
#     online_games = get_online_games()

#     # Здесь вы можете отправить данные куда-нибудь, например, в ваш GenServer для обработки

#     # Планируем следующую итерацию
#     schedule_work()
#     {:noreply, state}
#   end

#   defp schedule_work() do
#     # Планируем работу через определенный интервал (например, раз в 5 минут)
#     Process.send_after(self(), :work, 5 * 60 * 1000)
#   end

#   defp get_online_games() do
#     # Здесь вы должны реализовать логику получения данных с API
#     # Используйте HTTP-клиент или библиотеку, например, Tesla, для этого
#     # Возвращаем полученные данные
#   end
# end
