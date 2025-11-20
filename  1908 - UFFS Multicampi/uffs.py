import sys
import heapq

input = sys.stdin.readline

def main():
    N, K = map(int, input().split())

    graph = [[] for _ in range(N + K + 1)]

    for i in range(1, K + 1):
        data = list(input().split())
        sz = int(data[0])
        campuses = list(map(int, data[1:]))

        line_node = N + i

        for c in campuses:
            graph[c].append((line_node, 1))
            graph[line_node].append((c, 0))

    INF = 10**18
    dist = [INF] * (N + K + 1)
    dist[1] = 0
    pq = [(0, 1)]

    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue

        if u == N:
            print(d)
            return

        for v, w in graph[u]:
            nd = d + w
            if nd < dist[v]:
                dist[v] = nd
                heapq.heappush(pq, (nd, v))

    print(dist[N])

main()
