#include <bits/stdc++.h>
using namespace std;

long long INF = (1LL << 62);

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    while (cin >> N) {
        vector<long long> a(N);
        for (int i = 0; i < N; i++) cin >> a[i];

        vector<long long> A_prev(N), W_prev(N);
        vector<long long> A_curr(N), W_curr(N);

        for (int i = 0; i < N; i++) {
            A_prev[i] = a[i];
            W_prev[i] = 0;
        }

        for (int len = 2; len <= N; len++) {
            for (int l = 0; l + len - 1 < N; l++) {
                int r = l + len - 1;

                long long leftA  = a[l] + W_prev[l+1];
                long long rightA = a[r] + W_prev[l];
                A_curr[l] = max(leftA, rightA);

                long long leftW  = A_prev[l+1];
                long long rightW = A_prev[l];
                W_curr[l] = min(leftW, rightW);
            }
            swap(A_prev, A_curr);
            swap(W_prev, W_curr);
        }

        cout << A_prev[0] << "\n";
    }
    return 0;
}
