class PostsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    before_action :find_post, except: [:index, :create]

    def index
        posts = Post.all.includes(:comments)
        render json: posts.map{|post|PostSerializer.new(post).as_json}, status: :ok
    end
    
    def show
        render json: @post
    end
    
    def create
        # byebug
        result = Cloudinary::Uploader.upload(params[:media])        
        post = Post.new(post_params)
        post.media = result['url']
        if post.save
            render json: post, status: :created
        else
            render json: post.errors
        end
    end

    def update 
        @post.update!(post_params)
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

    def post_params
        params.permit(:text, :author_id, :media, :reactions)
    end

end
