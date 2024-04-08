package com.anthony.cardapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

@SpringBootApplication
public class CardapplicationApplication {

    public static void main(String[] args) {
        SpringApplication.run(CardapplicationApplication.class, args);
    }

    @Bean
    @Primary
    public DataSource dataSource() {
        return DataSourceBuilder.create()
                .username(auth.username())
                .password(auth.password())
                .url("jdbc:postgresql://localhost:5432/tradingcardsapp") // replace with your database url
                .driverClassName("org.postgresql.Driver") // replace with your driver class name
                .build();
    }
}