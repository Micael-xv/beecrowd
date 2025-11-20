#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int V, N;
    while (cin >> V >> N && (V || N)) {
        vector<int> coins(N);
        for (int i = 0; i < N; i++) cin >> coins[i];

        bitset<100001> dp;
        dp[0] = 1;

        for (int c : coins) {
            if (c <= V)
                dp |= (dp << c);
        }

        cout << (dp[V] ? "sim" : "nao") << '\n';
    }

    return 0;
}