defmodule Lessthanseventy.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      LessthanseventyWeb.Telemetry,
      # Start the Ecto repository
      Lessthanseventy.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Lessthanseventy.PubSub},
      # Start Finch
      {Finch, name: Lessthanseventy.Finch},
      # Start the Endpoint (http/https)
      LessthanseventyWeb.Endpoint
      # Start a worker by calling: Lessthanseventy.Worker.start_link(arg)
      # {Lessthanseventy.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Lessthanseventy.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    LessthanseventyWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
