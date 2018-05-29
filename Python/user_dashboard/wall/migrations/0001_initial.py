# Generated by Django 2.0.5 on 2018-05-29 00:00

from django.db import migrations, models
import django.db.models.manager


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('login_regis', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField()),
                ('users', models.ManyToManyField(related_name='all_messages', to='login_regis.User')),
            ],
            managers=[
                ('obj', django.db.models.manager.Manager()),
            ],
        ),
    ]
