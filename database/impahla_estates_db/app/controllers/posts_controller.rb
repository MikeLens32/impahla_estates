class PostsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    before_action :find_post, except: [:index, :create]#, :find_character

    def index
        user = User.find_by!(id: params[:user_id])
        render json: user.all
        # if params[:user_id]
        #     user = User.find_by!(id: params[:user_id])
        #     render json: user.all_leagues
            #
            # user.created_leagues
        # else 
        #     render json: Post.all
        # end
    end
    
    def show
        render json: @post
    end
    
    def create
        post = Post.create!(lg_params)
        Character.all.each do |anime_character| 
            LeagueCharacter.create(post: post, character: anime_character)
        end
        render json: post, status: :created
    end

    def update 
        @post.update!(lg_params)
        render json: @post, status: :ok
    end

    def destroy
        # binding.pry
        @post&.destroy!
        head :no_content
    end


    private

    def find_league
        @post = Post.find_by!(id: params[:id])
    end

    def lg_ch_params
        params.require(:post).permit(:id, :creator_id, :invitations, :league_characters)
    end

    def lg_params
        params.permit(:name, :creator_id, :invitations, :league_characters)
    end

end
