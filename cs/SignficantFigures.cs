using System;

class MainClass {
  public static void Main (string[] args) 
  {
    Console.Write("Enter an integer: ");
    string input = Console.ReadLine();
    int num = Int32.Parse(input);
    Console.WriteLine(SigFig(num));
  }
  
  public static int SigFig(int n)
  {
    if ()
    string nString = n.ToString();
    int length = nString.Length;
    int last = nString[length - 1];
    if (last > 0)
    {
      return 1;
    }
    return SigFig(n / 10);
  }
}
