#include <bits/stdc++.h>
using namespace std;
void solve(){
    string s;
    cin>>s;
    int n=s.length();
    vector<int>forward(n),backword(n);
    int v=s[0]=='v'?1:0;
    for(int i=1;i<n;i++){
        if(s[i]=='v'){
            v++;
        }
        else{
            v=0;
        }
        forward[i]=v;
    }
    for(auto i: forward){
        cout<<i<<" ";
    }
}
int main() {
   solve();
}
