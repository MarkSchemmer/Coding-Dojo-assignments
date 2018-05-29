# Generated by Django 2.0.5 on 2018-05-29 00:00

from django.db import migrations, models
import django.db.models.manager


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('is_admin', models.BooleanField(default=False)),
                ('user_authenticated', models.BooleanField(default=True)),
                ('description', models.TextField()),
            ],
            managers=[
                ('obj', django.db.models.manager.Manager()),
            ],
        ),
    ]