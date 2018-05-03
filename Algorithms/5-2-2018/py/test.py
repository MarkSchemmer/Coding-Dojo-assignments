import unittest 
from algos import un_zip as z 
from algos import countChars as c 

class testClassforAlgos(unittest.TestCase):
    
    def test_unZip(self):
        input = {
            'a':1,
            'b':2,
            'c':3
        }
        expected = [
            ['a','b','c'],
            [1,2,3]
        ]
        actual = z(input)
        self.assertEqual(actual, expected)

    def test_countChars(self):
        input = 'hello world'
        expected = {
            'h':1,
            'e':1,
            'l':3,
            'o':2,
            ' ':1,
            'w':1,
            'r':1,
            'd':1
        }
        actual = c(input)
        self.assertEqual(actual, expected)



if __name__ == '__main__':
    unittest.main()