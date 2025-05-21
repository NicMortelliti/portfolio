class PagesController < ApplicationController
  require "ostruct"

  def index
    @profile = OpenStruct.new(Rails.application.config_for(:profile))
  end
end
