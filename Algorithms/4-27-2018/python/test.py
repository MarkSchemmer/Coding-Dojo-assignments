import unittest
from pythonAlgos import fib


class testingFib(unittest.TestCase):

    def testFib(self):
        input = 10
        expected = 55
        actual = fib(input,[1,1])
        print(actual)
        self.assertEqual(actual, expected)

    def testFib2(self):
        input = 12
        expected = 144
        actual = fib(input,[1,1])
        print(actual)
        self.assertEqual(actual, expected)


if __name__ == '__main__':
    unittest.main()