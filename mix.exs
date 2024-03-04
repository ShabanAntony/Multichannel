defmodule Multistream.MixProject do
  use Mix.Project

  def project do
    [
      app: :multistream,
      version: "0.1.0",
      elixir: "~> 1.12",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:amqp, "~> 3.2"},
      {:jason, "~> 1.4"},
      {:redix, "~> 1.2"},
      {:mox, "~> 1.0"},
      {:horde, "~> 0.8.7"},
      {:libcluster, "~> 3.3"},
      {:libcluster_ec2, "~> 0.7.0"},
      {:excoveralls, "~> 0.15.3"},
      {:plug, "~> 1.14"},
      {:cowboy, "~> 2.9"},
      {:plug_cowboy, "~> 2.6"},
      {:poolboy, "~> 1.5"},
      {:logger_json, "~> 5.1"},
      {:credo, "~> 1.6", only: [:dev, :test], runtime: false},
      {:phoenix_live_dashboard, "~> 0.7.2"},
      {:benchee, "~> 1.1", only: :dev},
      {:httpoison, "~> 1.8"},
      {:poison, "~> 5.0"}
    ]
  end
end
