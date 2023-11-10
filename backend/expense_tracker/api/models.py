from django.db import models
from datetime import datetime
from django.contrib.auth.models import AbstractUser



class Customer(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username


class Income(models.Model):
    CATEGORY_CHOICES = [
        ('Salary', 'Salary'),
        ('Crypto', 'Crypto'),
        ('Freelancing', 'Freelancing'),
        ('Investments', 'Investments'),
        ('Bank', 'Bank'),
        ('Others', 'Others'),

        # Add more category choices as needed
    ]

    INCOME_TYPE = 'income' 


    user = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="incomes")
    title = models.CharField(max_length=50, help_text="Income Title")
    amount = models.DecimalField(max_digits=10, decimal_places=2, help_text="Amount Received")
    date = models.DateField()
    description = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, help_text="Category of Income")
    createdAt = models.DateTimeField(default=datetime.now)
    type = models.CharField(max_length=10, default=INCOME_TYPE) 
    updatedAt = models.DateTimeField(default=datetime.now)


    def __str__(self):
        return f"{self.title} - {self.user.username}"
    
    def save(self, *args, **kwargs):
        super(Income, self).save(*args, **kwargs)
        # Update the customer's balance when a new income record is added
        self.user.save()

    


class Expense(models.Model):
    CATEGORY_CHOICES = [
        ('Groceries', 'Groceries'),
        ('Health', 'Health'),
        ('Subscriptions', 'Subscriptions'),
        ('Clothing', 'Clothing'),
        ('Travelling', 'Travelling'),
        ('Education', 'Education'),
        ('Others', 'Others'),
        # Add more category choices as needed
    ]
    EXPENSE_TYPE = 'expense' 


    user = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='expenses')
    title = models.CharField(max_length=255, help_text="Expense Name/Description")
    amount = models.DecimalField(max_digits=10, decimal_places=2, help_text="Amount Spent")
    date = models.DateField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, help_text="Category of Expense")
    description = models.CharField(max_length=100, null=True)
    type = models.CharField(max_length=10, default=EXPENSE_TYPE) 
    createdAt = models.DateTimeField(default=datetime.now)
    updatedAt = models.DateTimeField(default=datetime.now)


    def __str__(self):
        return self.title
    

    
    def save(self, *args, **kwargs):
        super(Expense, self).save(*args, **kwargs)
        # Update the customer's balance when a new expense record is added
        self.user.save()






