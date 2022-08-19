class PostsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    before_action :find_post, except: [:index, :create]

    def index
        user = User.find_by!(id: params[:user_id])
        render json: user.all
    end
    
    def show
        render json: @post
    end
    
    def create
        post = Post.create!(pos_params)
        render json: post, status: :created
    end

    def update 
        @post.update!(pos_params)
        render json: @post, status: :ok
    end

    def destroy
        @post&.destroy!
        head :no_content
    end


    private

    def find_post
        @post = Post.find_by!(id: params[:id])
    end

    def pos_params
        params.permit(:text, :author_id, :media, :reactions)
    end

end
