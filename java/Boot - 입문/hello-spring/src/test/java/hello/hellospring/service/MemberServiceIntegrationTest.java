package hello.hellospring.service;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.JdbcMemberRepository;
import hello.hellospring.repository.JdbcTemplateMemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

// 순수 자바 코드로 하는 건 단위테스트, 이처럼 DB를 연결하는 등의 테스트는 통합테스트
// 순수한 단위테스트를 잘 만드는 것이 더 낫다. 스프링의 도움 없이도 테스트 할 수 있는!

@SpringBootTest
@Transactional
public class MemberServiceIntegrationTest {

    // @Transactional : TEST를 시작할 때 트랜잭션을 실행한 후 ROLLBACK을 자동으로 함 (DB 반영 X)
    // => DB와 실제로 연결된 테스트를 실행할 때 DB에 데이터가 남지 않으므로 다음 테스트에 영향 X
    // 이외에도 각 테스트에 @Commit 등의 어노테이션으로 커밋도 가능하다!
    @Autowired MemberService memberService;
    @Autowired
    JdbcTemplateMemberRepository memberRepository;

    @Test
    void 회원가입() {
        Member member = new Member();
        member.setName("senny");

        Long saveId = memberService.join(member);
        Member findMember = memberService.findOne(saveId).get();
        assertThat(member.getName()).isEqualTo(findMember.getName());
    }

    @Test
    public void 중복_회원가입_테스트() {
        Member member1 = new Member();
        member1.setName("senny");
        Member member2 = new Member();
        member2.setName("senny");
        memberService.join(member1);
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");

    }

}
