package com.anthony.cardapplication.repository;

import com.anthony.cardapplication.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    @Query("SELECT c FROM Card c WHERE LOWER(c.first_name) = LOWER(:first_name) AND LOWER(c.last_name) = LOWER(:last_name)")
    List<Card> searchCard(@Param("first_name") String fName, @Param("last_name") String lName);
}

