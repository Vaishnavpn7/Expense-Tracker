from rest_framework import serializers
from .models import Customer, Income, Expense

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Customer(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})



class CustomerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['username', 'email' ]


class AddIncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['title', 'amount', 'date', 'description', 'category']

    def validate(self, data):
        # Check if all fields are provided
        if not all(data.values()):
            raise serializers.ValidationError("All fields are required.")
        
        return data



class ListIncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = [ 'id', 'title', 'amount', 'date', 'description', 'category','createdAt', 'updatedAt', 'type']



class UpdateIncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['title', 'amount', 'date', 'description', 'category','createdAt', 'updatedAt', 'type']

    def validate_user(self, value):
        # Prevent users from changing the 'user' field
        if value != self.instance.user:
            raise serializers.ValidationError("You are not allowed to change the user field.")
        return value


class AddExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['title', 'amount', 'date', 'category', 'description']

    def validate(self, data):
        # Check if all fields are provided
        if not all(data.values()):
            raise serializers.ValidationError("All fields are required.")

        return data



class ListExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id', 'title', 'amount', 'date', 'category', 'description','createdAt', 'updatedAt', 'type']




class UpdateExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['title', 'amount', 'date', 'category', 'description', 'createdAt', 'updatedAt', 'type']

    def validate_user(self, value):
        # Prevent users from changing the 'user' field
        if value != self.instance.user:
            raise serializers.ValidationError("You are not allowed to change the user field.")
        return value
