package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.*; // StaticImport로 Assertions의 메서드를 편하게 사용 가능

/*
* 테스트 주도 개발 : 테스트를 먼저 만들어 테스트 한 후, 구현 클래스를 만들어서 돌리는 것
* 많은 사람들이 협업할 때를 대비하여 테스트는 깊이있게 공부해야 함 !!
* */


class MemoryMemberRepositoryTest {  // 다른 곳에서 끌어와서 사용할게 아니기 때문에 public 제거 가능

    MemoryMemberRepository repository = new MemoryMemberRepository();

    // ====!!! 클래스의 모든 테스트를 수행하면, 테스트간에 의존성이 없어야 하기 때문에 무작위 순서로 수행됨
    // findByName()과 findAll()의 경우 둘 다 Member객체를 사용하기 때문에 데이터 중복으로 인한 오류가 발생함
    // 그러므로, 저장소를 비워주는 메서드를 추가해보기
    @AfterEach // 각 메서드의 동작이 끝날 때마다 수행하는 콜백 메서드
    public void afterEach() {
        repository.clearStore(); // 저장소를 비우는 메서드 (store.clear();)
    }

    @Test
    public void save() {
        //given
        Member member = new Member();
        member.setName("senny");

        //when
        repository.save(member);

        //then
        // Optional에서 값을 꺼내는 방법은 .get() - 직접 꺼내는 건 좋은 방법은 아님
        Member result = repository.findById(member.getId()).get();
        Assertions.assertEquals(member, result); // assertEquals(expected, actual)
        assertThat(member).isEqualTo(result); // import static org.assertj.core.api.Assertions.*;
    }

    @Test
    public void findByName() {

        // given
        // senny1 회원가입
        Member member1 = new Member();
        member1.setName("senny1");
        repository.save(member1);
        // senny2 회원가입
        Member member2 = new Member();
        member2.setName("senny2");
        repository.save(member2);

        // when
        Member result = repository.findByName("senny1").get();

        // then
        assertThat(result).isEqualTo(member1);
    }

    @Test
    public void findAll() {
        // given
        Member member1 = new Member();
        member1.setName("senny1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("senny2");
        repository.save(member2);

        // when
        List<Member> result = repository.findAll();

        // then
        // 가입된 회원 수가 예상과 맞는지 확인
        assertThat(result.size()).isEqualTo(2);
    }
}
