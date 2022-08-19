class CommentsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    before_action :find_comment, except: [:index, :create]

    def index
        user = User.find_by!(id: params[:user_id])
        render json: user.all
    end
    
    def show
        render json: @comment
    end
    
    def create
        comment = Comment.create!(com_params)
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
        params.permit(:text, :media, :reactions)
    end

end
