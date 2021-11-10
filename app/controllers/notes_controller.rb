class NotesController < ApplicationController
    
    def index
        notes = Note.all
        render json: notes
    end

    def show
        note = Note.find(params[:id])
        render json: note
    end

    def update 
        note = Note.find(params[:id])
        note.update!(note_params)
        render json: note
    end

    def destroy
        note = Note.find(params[:id])
        note.destroy
        head :no_content 
    end

    def create
        user = User.find_by(id: session[:user_id])
        note = user.create!(note_params)
        render json: note, status: :created 
    end

    private

    def note_params
        params.permit(:memo, :user_id)
    end
end
