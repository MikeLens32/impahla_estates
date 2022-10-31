class CommentsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    before_action :find_comment, except: [:index, :create]

    def index
        post = Post.find(params[:post_id])
        comments = post.comments.where(user_id: params[:user_id])
        render json: comments.to_json
    end
    
    def show
        render json: @comment
    end
    
    def create
        comment = Comment.new(com_params)
        comment.post_id = params[:post_id]
        comment.user_id = session[:user_id]
        comment.save
        render json: comment, status: :created
    end

    def update 
        @comment.update!(com_params)
        render json: @comment, status: :ok
    end

    def destroy
        @comment&.destroy!
        head :no_content
    end


    private

    def find_comment
        @comment = Comment.find_by!(id: params[:id])
    end

    def com_params
        params.permit(:text, :post_id)
    end

end
