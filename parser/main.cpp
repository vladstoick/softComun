#include <iostream>
#include <fstream>
#include <cstring>
using namespace std;
ifstream in("in.in");
ofstream out("out.out");
char slogan[2000];
char question[2000][2000];
char varA[2000][2000];
char varB[2000][2000];
char varC[2000][2000];
char varD[2000][2000];
int answer[2000];
int lungime,id;
char sir[2000];
void afiseaza(char nume[], char a[2000][2000])
{
    out<<nume<<"["<<id<<"]=[";
    for(int i=1;i<=lungime/6;i++)
    {
        out<<"\""<<a[i]<<"\"";

        if(i!=lungime/6)
            out<<",";
    }
    out<<"]"<<endl;
}
void afiseaza2(char nume[], int a[2000])
{
    out<<nume<<"["<<id<<"]=[";
    for(int i=1;i<=lungime/6;i++)
    {
                out<<a[i];
        if(i!=lungime/6)
            out<<",";
    }
    out<<"];"<<endl;
}
int main()
{
    in>>lungime>>id>>ws;
    in.getline(slogan,2000);
    for(int i=1;i<=lungime;i++)
    {
        in.getline(sir,2000);
        switch(i%6)
        {
            case 1:strcpy(question[i/6+1],sir);break;
            case 2:strcpy(varA[i/6+1],sir);break;
            case 3:strcpy(varB[i/6+1],sir);break;
            case 4:strcpy(varC[i/6+1],sir);break;
            case 5:strcpy(varD[i/6+1],sir);break;
            case 0:answer[i/6]=sir[0]-'a'+1;break;
        }
    }
    out<<"slogan["<<id<<"]=\""<<slogan<<"\";"<<endl;
    afiseaza("varA",varA);
    afiseaza("varB",varB);
    afiseaza("varC",varC);
    afiseaza("varD",varD);
    afiseaza("question",question);
    afiseaza2("answer",answer);
    return 0;
}
