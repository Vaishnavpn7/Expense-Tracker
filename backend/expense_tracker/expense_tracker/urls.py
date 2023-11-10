
from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/',views.UserRegistrationView.as_view(), name='user-register'),
    path('login/',views.UserLoginView.as_view(), name='user-login'),
    path('income/add/', views.AddIncomeView.as_view(), name='add-income'),
    path('income/', views.ListIncomeView.as_view(), name='list-income'),
    path('income/edit/<int:pk>/', views.UpdateIncomeView.as_view(), name='edit-income'),
    path('income/delete/<int:pk>/', views.DeleteIncomeView.as_view(), name='delete-income'),
    path('expense/add/',views.AddExpenseView.as_view(), name='add-expense'),
    path('expense/', views.ListExpenseView.as_view(), name='list-expense'),
    path('expense/edit/<int:pk>/', views.UpdateExpenseView.as_view(), name='edit-expense'),
    path('expense/delete/<int:pk>/', views.DeleteExpenseView.as_view(), name='delete-expense'),
    path('profile/', views.CustomerProfileView.as_view(), name='profile'),


]
