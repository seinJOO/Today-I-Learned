package hello.hellospring.repository;

import hello.hellospring.domain.Member;

import java.util.*;

// @Repository // 직접 자바 코드로 의존성 주입해보기
public class MemoryMemberRepository implements MemberRepository{

    // 실무에서는 동시성 문제로 인해 ConcurrentHashMap을 사용함
    private static Map<Long, Member> store = new HashMap<>();
    // 실무에서는 동시성 문제로 인해 AtomicLong을 사용함
    private static long sequence = 0L; // sequence : 자동으로 증가하는 key값을 생성

    @Override
    public Member save(Member member) {
        member.setId(++sequence); // ID 저장 후 sequence 증가시킴
        store.put(member.getId(), member); // store 해시맵에 ID 저장
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(store.get(id)); // ID가 null이더라도 클라이언트에서 인식하여 작업 가능
    }

    @Override
    public Optional<Member> findByName(String name) {
        // 루프로 Map을 돌려서 하나라도 찾으면 반환(findAny), 없으면 Optional에 null이 포함되어 반환
        return store.values().stream().
                filter(member -> member.getName().equals(name))
                .findAny();
    }

    @Override
    public List<Member> findAll() {
        // store에 있는 member 값이 반환됨
        return new ArrayList<>(store.values());
    }

    public void clearStore() {
        // 저장소를 비우는 메서드
        store.clear();
    }
}
