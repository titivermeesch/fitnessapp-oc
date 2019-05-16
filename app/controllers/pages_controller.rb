class PagesController < ApplicationController
  before_action :authenticate_user!
  def home
    if user_signed_in?
      @activities = current_user.activities
    end
  end
  
  def add
  end

  def create
    
  end
end
