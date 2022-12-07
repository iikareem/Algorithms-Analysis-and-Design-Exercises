#include <iostream>
#include <string>
using namespace std;


int main()
{
	int size = 0;
	int* arr;
	int j, key;
	cin >> size;
	arr = new int[size];
	for (int i = 0; i < size; i++)
	{
	cin >> arr[i];}

	

	for (int i = 1; i < size; i++)
	{
		key = arr[i];
		j = i - 1;

		while (j>=0 && arr[j]>key)
		{
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}

	for (int i = 0; i < size; i++)
	{
		cout << arr[i] << " ";
	}


}
