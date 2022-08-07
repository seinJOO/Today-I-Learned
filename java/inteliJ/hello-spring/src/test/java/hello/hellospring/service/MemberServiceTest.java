package hello.hellospring.service;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.MemoryMemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;


// 실제 클래스에서 클래스명 드래그 & Ctrl+Shift+T를 누르면 테스트 껍데기 자동생성 !!!
class MemberServiceTest {

    // Dependancy Injection 의존성 주입 ==============
    // 실제 메모리와 다른 멤버 레퍼지토리로 테스트를 하고 있음 - 같은 인스턴스를 쓰도록 변경
//    MemberService memberService = new MemberService();
//    MemoryMemberRepository memberRepository = new MemoryMemberRepository();
    MemberService memberService;
    MemoryMemberRepository memberRepository;

    @BeforeEach
    public void beforeEach() {
        // 1. 테스트에서 new 레퍼지토리 생성
        memberRepository = new MemoryMemberRepository();
        // 2. 서비스 객체를 해당 레퍼지토리로 생성
        memberService = new MemberService(memberRepository);
        // 3. 테스트 코드 내에서 떄마다 생성하지 않고, 동일한 레퍼지토리를 사용할 수 있게 됨
        // =======> DI(의존성주입)
    }

    @AfterEach
    public void afterEach() {
        memberRepository.clearStore();
    }

    // 테스트코드의 클래스는 알기 쉽게 한글로 ㅋㅋ 적기도 함
    // given(기반 데이터) - when(로직 검증) - then(검증 결과)
    @Test
    void 회원가입() {
        // given
        Member member = new Member();
        member.setName("senny");

        // when
        Long saveId = memberService.join(member);
        // then - 레포지토리에 있는 데이터가 내가 넣은 데이터가 맞는지
        Member findMember = memberService.findOne(saveId).get();
        assertThat(member.getName()).isEqualTo(findMember.getName());
    }

    @Test
    public void 중복_회원가입_테스트() {
        //given - 예외케이스 작성
        Member member1 = new Member();
        member1.setName("senny");
        Member member2 = new Member();
        member2.setName("senny");
        //when - 예외케이스 검증
        memberService.join(member1);
            // assertThrows(expected, actual) - 예상대로 예외처리가 되는지 확인
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");

        // try-catch를 넣기엔 좀 애매한 코드이지만 넣어보기
//        try {
//            memberService.join(member2);
//            fail("");
//        } catch (IllegalStateException e) {
//            // 예외를 인식 - 정상적으로 성공 -> service의 실제 error메세지와 비교
//            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
//        }

        //then
    }

    @Test
    void 전체회원조회() {
    }

    @Test
    void 아이디로정보조회() {
    }
}