# Generated by Django 4.1.3 on 2023-11-08 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_expense_createdat_expense_updatedat_income_createdat_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='expense',
            name='type',
            field=models.CharField(default='expense', max_length=10),
        ),
        migrations.AddField(
            model_name='income',
            name='type',
            field=models.CharField(default='income', max_length=10),
        ),
    ]