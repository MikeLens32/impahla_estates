class ListingsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    before_action :find_listing, except: [:index, :create]

    def index
        user = User.find_by!(id: params[:user_id])
        render json: user.all
    end
    
    def show
        render json: @listing
    end
    
    def create
        listing = Post.create!(list_params)
        render json: listing, status: :created
    end

    def update 
        @listing.update!(list_params)
        render json: @listing, status: :ok
    end

    def destroy
        @event&.destroy!
        head :no_content
    end


    private

    def find_listing
        @listing = Post.find_by!(id: params[:id])
    end

    def list_params
        params.permit(:text, :media, :reactions)
    end

end
