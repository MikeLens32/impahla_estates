class ListingsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    before_action :find_listing, except: [:index, :create]

    def index
        # user = User.find_by!(id: params[:user_id])
        listing = Listing.all
        # byebug
        render json: listing
    end
    
    def show
        render json: @listing
    end
    
    def create
        result = Cloudinary::Uploader.upload(params[:media])
        listing = Listing.create(list_params)
        listing.media = result['url']
        listing.creator_id = session[:user_id]
        listing.save
        render json: listing, status: :created
    end

    def update 
        @listing.update!(list_params)
        render json: @listing, status: :ok
    end

    def destroy
        @listing&.destroy!
        head :no_content
    end


    private

    def find_listing
        @listing = Listing.find_by!(id: params[:id])
    end

    def list_params
        params.permit(:id, :address, :description, :media, :price, :bedroom, :bath)
    end

end
