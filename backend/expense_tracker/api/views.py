from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Customer, Income, Expense
from .serializers import UserRegistrationSerializer, UserLoginSerializer, CustomerProfileSerializer, AddIncomeSerializer, ListIncomeSerializer, UpdateIncomeSerializer, AddExpenseSerializer, ListExpenseSerializer, UpdateExpenseSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login
from rest_framework.permissions import IsAuthenticated



class UserRegistrationView(generics.CreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = UserRegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered successfully"},
                status=status.HTTP_201_CREATED
            )
        return Response(
            {"errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )


class UserLoginView(generics.CreateAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']  # Change 'email' to 'username'
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)  # Change 'email' to 'username'

            if user is not None:
                login(request, user)
                token, created = Token.objects.get_or_create(user=user)
                return Response(
                    {"token": token.key, "message": "Login successful"},
                    status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {"error": "Invalid credentials"},
                    status=status.HTTP_401_UNAUTHORIZED
                )
            

class CustomerProfileView(generics.RetrieveAPIView):
    serializer_class = CustomerProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retrieve the customer's profile based on the currently authenticated user
        return self.request.user




class AddIncomeView(generics.CreateAPIView):
    serializer_class = AddIncomeSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)




class ListIncomeView(generics.ListAPIView):
    serializer_class = ListIncomeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Retrieve income items for the authenticated user
        return Income.objects.filter(user=self.request.user)




class UpdateIncomeView(generics.UpdateAPIView):
    serializer_class = UpdateIncomeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Retrieve income items for the authenticated user
        return Income.objects.filter(user=self.request.user)


class DeleteIncomeView(generics.DestroyAPIView):
    queryset = Income.objects.all()  # Query all income items
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retrieve the income item to delete and check if it belongs to the authenticated user
        obj = super().get_object()
        if obj.user == self.request.user:
            return obj
        else:
            return None

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance:
            instance.delete()
            return Response({"message": "Income item deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({"error": "Unable to delete income item or it does not exist"}, status=status.HTTP_400_BAD_REQUEST)




class AddExpenseView(generics.CreateAPIView):
    serializer_class = AddExpenseSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)




class ListExpenseView(generics.ListAPIView):
    serializer_class = ListExpenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Retrieve expense items for the authenticated user
        return Expense.objects.filter(user=self.request.user)


class UpdateExpenseView(generics.UpdateAPIView):
    serializer_class = UpdateExpenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Retrieve expense items for the authenticated user
        return Expense.objects.filter(user=self.request.user)



class DeleteExpenseView(generics.DestroyAPIView):
    queryset = Expense.objects.all()  # Query all expense items
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retrieve the expense item to delete and check if it belongs to the authenticated user
        obj = super().get_object()
        if obj.user == self.request.user:
            return obj
        else:
            return None

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance:
            instance.delete()
            return Response({"message": "Expense item deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({"error": "Unable to delete expense item or it does not exist"}, status=status.HTTP_400_BAD_REQUEST)
