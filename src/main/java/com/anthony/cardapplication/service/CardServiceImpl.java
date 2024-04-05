package com.anthony.cardapplication.service;

import com.anthony.cardapplication.model.Card;
import com.anthony.cardapplication.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Add this annotation to mark this class as a Spring-managed bean
public class CardServiceImpl implements CardService {

    @Autowired
    private CardRepository cardRepository;

    @Override
    public Card saveCard(Card card) {
        return cardRepository.save(card);
    }

    @Override
    public List<Card> getAllCard() {

        return cardRepository.findAll();
    }
}
