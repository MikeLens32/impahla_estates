class EventsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    before_action :find_event, except: [:index, :create]

    def index
        user = User.find_by!(id: params[:user_id])
        render json: user.all
    end
    
    def show
        render json: @event
    end
    
    def create
        event = Post.create!(even_params)
        render json: event, status: :created
    end

    def update 
        @event.update!(even_params)
        render json: @event, status: :ok
    end

    def destroy
        @event&.destroy!
        head :no_content
    end


    private

    def find_event
        @event = Post.find_by!(id: params[:id])
    end

    def even_params
        params.permit(:text, :media, :reactions)
    end

end
