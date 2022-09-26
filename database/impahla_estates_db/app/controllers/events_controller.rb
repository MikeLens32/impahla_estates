class EventsController < ApplicationController
    skip_before_action :authorized, only: [:index, :update]
    before_action :find_event, except: [:index, :create]

    def index
        # user = User.find_by!(id: params[:user_id])
        event = Event.all
        render json: event
    end
    
    def show
        render json: @event
    end
    
    def create
        event = Event.create(even_params)
        event.host_id = session[:user_id]
        event.save
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
        @event = Event.find_by!(id: params[:id])
    end

    def even_params
        params.permit(:text, :media, :date, :host_id)
    end

end
