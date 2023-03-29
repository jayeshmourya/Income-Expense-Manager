from django.urls import path
from . import views

from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', views.index, name="expenses"),
    path('add-expense', views.add_expense, name="add-expenses"),
    path('edit-expense/<int:id>', views.expense_edit, name="expense-edit"),
    path('expense-delete/<int:id>', views.delete_expense, name="expense-delete"),
    path('search-expenses', csrf_exempt(views.search_expenses),
         name="search_expenses"),
    path('expense_category_summary', views.expense_category_summary,
         name="expense_category_summary"),
    path('stats',views.stats_view,
         name="stats"),
     path('all_expense_stats/',views.all_expense_stats,name='all_expense_stats'),
     path('all_expense_stats_week/',views.all_expense_stats_week,name='all_expense_stats_week'),
     path('all_expense_stats_month/',views.all_expense_stats_month,name='all_expense_stats_month'),
     path('all_expense_stats_year/',views.all_expense_stats_year,name='all_expense_stats_year'),

     path('all_of_expense/',views.all_expense,name='all__of_expense'),
     # path('all_expense_stats/<str:type>/',views.all_expense_stats_type,name='all_expense_stats_type'),
     # path('all_expense_stats/<str:type>/',views.all_expense_stati,name='all_expense_stats_type'),
     # path('date_wise_monthly_expense/',views.mont,name='date_wise_monthly_expense'),
     # path('month_wise_yearly_expense/',views.month_wise_yearly_expense,name='month_wise_yearly_expense'),
     
]
