package hello.hellospring.repository;

import hello.hellospring.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    // 회원 저장
    Member save(Member member);
    // 회원 찾기
    Optional<Member> findById(Long id); // Optional : 데이터가 null일 경우를 방지하여 감싸는 자료형
    Optional<Member> findByName(String name);
    // 모든 회원 리스트 반환
    List<Member> findAll();
}
