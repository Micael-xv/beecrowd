import sys
import math
import heapq

input = sys.stdin.readline

def dijkstra(start, end, graph, N):
    INF = 10**18
    dist = [INF] * N
    dist[start] = 0.0
    pq = [(0.0, start)]

    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        if u == end:
            return d
        for v, w in graph[u]:
            nd = d + w
            if nd < dist[v]:
                dist[v] = nd
                heapq.heappush(pq, (nd, v))
    return -1

def main():
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        N = int(line)
        if N == 0:
            return
        
        X = [0]*N
        Y = [0]*N
        R = [0]*N

        for i in range(N):
            xi, yi, ri = map(int, input().split())
            X[i] = xi
            Y[i] = yi
            R[i] = ri

        graph = [[] for _ in range(N)]

        for i in range(N):
            xi, yi, ri = X[i], Y[i], R[i]
            for j in range(N):
                if i == j:
                    continue
                dx = X[j] - xi
                dy = Y[j] - yi
                dist = math.sqrt(dx*dx + dy*dy)

                if dist <= ri:
                    graph[i].append((j, dist))
        
        C = int(input())
        for _ in range(C):
            a, b = map(int, input().split())
            ans = dijkstra(a-1, b-1, graph, N)
            if ans == -1:
                print(-1)
            else:
                print(int(ans))

main()