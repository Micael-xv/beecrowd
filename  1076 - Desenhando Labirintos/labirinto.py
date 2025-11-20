import sys

input = sys.stdin.readline

T = int(input())
for _ in range(T):
    start = int(input())
    V, A = map(int, input().split())

    edges = set()

    for _ in range(A):
        u, v = map(int, input().split())
        if u > v:
            u, v = v, u
        edges.add((u, v))

    print(2 * len(edges))