#include <bits/stdc++.h>
using namespace std;

static int t[21];
static int d[21][21];
static int dp[1<<20][20];

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    while (true) {
        cin >> N;
        if (N == 0) break;

        for (int i = 0; i < N; i++) {
            cin >> t[i];
        }
        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++)
                cin >> d[i][j];

        int maxMask = 1 << N;

        const int INF = 1e9;

        for (int mask = 0; mask < maxMask; mask++)
            for (int i = 0; i < N; i++)
                dp[mask][i] = INF;

        int answer = 0;

        for (int i = 0; i < N; i++) {
            if (t[i] <= 420) {
                dp[1<<i][i] = t[i];
                answer = 1;
            }
        }

        for (int mask = 0; mask < maxMask; mask++) {
            for (int u = 0; u < N; u++) {
                if (!(mask & (1<<u))) continue;
                int currTime = dp[mask][u];
                if (currTime > 420) continue;

                int visited = __builtin_popcount(mask);
                answer = max(answer, visited);

                for (int v = 0; v < N; v++) {
                    if (mask & (1<<v)) continue;
                    int newTime = currTime + d[u][v] + t[v];
                    if (newTime <= 420) {
                        int newMask = mask | (1<<v);
                        dp[newMask][v] = min(dp[newMask][v], newTime);
                    }
                }
            }
        }

        cout << answer << "\n";
    }

    return 0;
}