package hello.hellospring.service;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.MemberRepository;
import hello.hellospring.repository.MemoryMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/* @Service 등록 시 스프링이 서비스 객체를 빈에 저장하기 위해 스캔
*  => @Autowired로 MemberRepository를 연결하면
* 스프링에서 자동으로 필요성을 인식하여 서비스에 주입함 */
// @Service // 직접 자바 코드로 의존성 주입해보기
@Transactional // JPA를 쓸 때는 서비스에 Transactional 처리해줘야 함 (DB 이상현상 방지)
public class MemberService {

    /**
     * 회원 정보 레포지토리 import
     * 레퍼지토리를 서비스에서 직접 new로 생성하는게 아니라, 외부에서 객체를 주입해줄 수 있도록 바꿔줌
     * 테스트 등의 환경에서도 동일한 레퍼지토리를 사용할 수 있게 됨
     */
    private final MemberRepository memberRepository;

    //@Autowired // 직접 자바 코드로 의존성 주입해보기
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * 회원 가입
     */
    public Long join(Member member) {
        // 회원 정보 유효성 검사(중복X)
//        result 값이 이미 있으면 예외처리
//        결과값을 Optional로 감싸서 받아오면 null 등 내부 데이터가 어떤 내용이든 활용 가능
//        Optional에는 여러 유용한 메서드도 있으니 사용하면 좋음
//        ex) .orElseGet() : 값이 있으면 꺼내고, 없으면 어떠한 메서드를 실행
        // memberRepository.findByName()이 이미 Optional을 리턴하기 때문에 아래와 같이 사용//
        validateDuplicateMember(member);

        // 회원가입 시 member객체를 저장한 후 id 반환
        memberRepository.save(member);
        return member.getId();
    }

    // Extract Method로 새로운 클래스 생성 + 메서드로 전환 (Ctrl+Alt+M)
    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName())
                .ifPresent(m -> {
                throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    /**
     * 전체 회원 조회
     */
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    /**
     * ID로 회원정보 조회
     */
    public Optional<Member> findOne(Long memberId) {
        return memberRepository.findById(memberId);
    }
}
