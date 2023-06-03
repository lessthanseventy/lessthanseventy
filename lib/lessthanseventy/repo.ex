defmodule Lessthanseventy.Repo do
  use Ecto.Repo,
    otp_app: :lessthanseventy,
    adapter: Ecto.Adapters.SQLite3
end
