import sys
import heapq

input = sys.stdin.readline

MAX_HP = 1000
DP_LIMIT = MAX_HP + 2000

def compute_kill_cost(magias):
    INF = 10**18
    dp = [INF] * (DP_LIMIT + 1)
    dp[0] = 0

    for cost, dmg in magias:
        for h in range(dmg, DP_LIMIT + 1):
            nc = dp[h - dmg] + cost
            if nc < dp[h]:
                dp[h] = nc

    for h in range(DP_LIMIT - 1, -1, -1):
        if dp[h + 1] < dp[h]:
            dp[h] = dp[h + 1]

    return dp

def dijkstra(N, graph, room_cost):
    INF = 10**30
    dist = [INF] * (N + 1)
    dist[1] = room_cost[1]

    pq = [(dist[1], 1)]

    while pq:
        custo, u = heapq.heappop(pq)
        if custo > dist[u]:
            continue

        if u == N:
            return custo

        for v in graph[u]:
            nc = custo + room_cost[v]
            if nc < dist[v]:
                dist[v] = nc
                heapq.heappush(pq, (nc, v))

    return dist[N]

def main():
    for line in sys.stdin:
        if not line.strip():
            continue

        M, N, G, K = map(int, line.split())
        if M == 0:
            return

        magias = []
        for _ in range(M):
            c, d = map(int, input().split())
            magias.append((c, d))

        kill_cost = compute_kill_cost(magias)

        graph = [[] for _ in range(N + 1)]
        for _ in range(G):
            a, b = map(int, input().split())
            graph[a].append(b)
            graph[b].append(a)

        room_cost = [0] * (N + 1)
        for _ in range(K):
            sala, hp = map(int, input().split())
            room_cost[sala] += kill_cost[hp]

        ans = dijkstra(N, graph, room_cost)
        if ans >= 10**29:
            print(-1)
        else:
            print(ans)

main()