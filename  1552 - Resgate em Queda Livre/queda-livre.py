import sys
import math
import heapq

input = sys.stdin.readline

def main():
    C = int(input())
    for _ in range(C):
        n = int(input())
        pts = [tuple(map(int, input().split())) for __ in range(n)]

        used = [False] * n
        min_d = [float('inf')] * n
        min_d[0] = 0.0

        pq = [(0.0, 0)]
        mst_cost = 0.0

        while pq:
            d, u = heapq.heappop(pq)
            if used[u]:
                continue
            used[u] = True
            mst_cost += d

            ux, uy = pts[u]

            for v in range(n):
                if not used[v]:
                    vx, vy = pts[v]
                    w = math.hypot(ux - vx, uy - vy)
                    if w < min_d[v]:
                        min_d[v] = w
                        heapq.heappush(pq, (w, v))

        print(f"{mst_cost/100:.2f}")

main()
