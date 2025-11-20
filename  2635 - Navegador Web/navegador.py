import sys
sys.setrecursionlimit(10**7)
input = sys.stdin.readline

class TrieNode:
    __slots__ = ("next", "count", "max_len")
    def __init__(self):
        self.next = [None]*26
        self.count = 0
        self.max_len = 0

def insert(root, word):
    node = root
    wlen = len(word)
    for ch in word:
        idx = ord(ch)-97
        nxt = node.next[idx]
        if nxt is None:
            nxt = TrieNode()
            node.next[idx] = nxt
        node = nxt
        node.count += 1
        if wlen > node.max_len:
            node.max_len = wlen

def query(root, s):
    node = root
    for ch in s:
        idx = ord(ch)-97
        node = node.next[idx]
        if node is None:
            return -1
    return node.count, node.max_len

def main():
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        N = int(line)
        root = TrieNode()

        for _ in range(N):
            w = input().strip()
            insert(root, w)

        Q = int(input())
        out = []
        for _ in range(Q):
            s = input().strip()
            res = query(root, s)
            if res == -1:
                out.append("-1")
            else:
                out.append(f"{res[0]} {res[1]}")
        print("\n".join(out))

main()