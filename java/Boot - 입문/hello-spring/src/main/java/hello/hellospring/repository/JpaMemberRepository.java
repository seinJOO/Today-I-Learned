package hello.hellospring.repository;

import hello.hellospring.domain.Member;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

public class JpaMemberRepository implements MemberRepository {

    private final EntityManager em;
    // 스프링부트가 프로퍼티 파일 등을 기반으로 자동으로 만들어준 EntityManager를 우리가 Inject(주입) 해주면 됨!

    public JpaMemberRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Member save(Member member) {
        // 아래 코드로 member객체를 넣으면 id값 세팅과 name insert까지 다 해줌!!!
        em.persist(member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        // member객체에서 PK인 id값을 빼와서 find 후 객체에 정보 담아주기
        Member member = em.find(Member.class, id);
        return Optional.ofNullable(member); // ofNullable : null값도 허용
    }

    @Override
    public Optional<Member> findByName(String name) {
        // select m => 객체 자체를 select 해버림 / createQuery() : 쿼리를 만들어서 쓸 때 사용

        List<Member> result = em.createQuery("select m from Member m where m.name = :name", Member.class)
                .setParameter("name", name).getResultList();
        return result.stream().findAny();
    }

    @Override
    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class).getResultList();
    }
}
