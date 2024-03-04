# defmodule Multistream.Application do
#   use Application

#   def start(_type, _args) do
#     children = [
#       Multistream.OnlineGamesServer
#     ]

#     opts = [strategy: :one_for_one, name: Multistream.Supervisor]
#     Supervisor.start_link(children, opts)
#   end
# end
