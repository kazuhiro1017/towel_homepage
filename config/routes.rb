Rails.application.routes.draw do
  root "homepages#index"

  resources :homepages, only: :index do
    collection do 
      get "service" 
      get "item"
      get "about"
      get "access"
      get "recruit"
    end
  end

end
